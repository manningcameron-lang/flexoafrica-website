#!/bin/bash
# deploy-website.command
# Double-click me to deploy flexoafrica.com.
#
# Order of operations:
#   0. Self-heal: init git if needed.
#   1. Restore tracked files that are missing locally (e.g. opengraph-image.png).
#   2. Remove FNB PDF if it snuck back in.
#   3. Show git status.
#   4. Optional local build (skipped if npm cache is broken; Vercel will build).
#   5. git add / commit / push. Vercel auto-deploys.

set -e
cd "$(dirname "$0")"
REPO_URL="https://github.com/manningcameron-lang/flexoafrica-website.git"

echo ""
echo "==========================================="
echo "  Flexo Africa Website — Deploy"
echo "==========================================="
echo ""

# ---------------------------------------------------------------------------
# 0. Self-heal: initialize git if this folder isn't a repo yet.
# ---------------------------------------------------------------------------
if [ ! -d .git ]; then
  echo "This folder isn't a git repo yet. Wiring it up now..."
  echo "(All your files stay exactly as they are.)"
  echo ""
  git init -b main
  git remote add origin "$REPO_URL"
  echo "--- fetching origin/main ---"
  git fetch origin main
  git reset --mixed origin/main
  if ! git config user.email >/dev/null 2>&1; then
    git config user.email "manning.cameron@gmail.com"
    git config user.name "Cameron Manning"
  fi
  echo ""
  echo "Git initialized. Continuing..."
  echo ""
fi

# ---------------------------------------------------------------------------
# 1. Restore tracked files that are missing locally.
#    (These were on main before your local folder existed, so we bring them
#    back rather than deleting them from the repo.)
# ---------------------------------------------------------------------------
for f in app/opengraph-image.png; do
  if [ ! -f "$f" ] && git cat-file -e "origin/main:$f" 2>/dev/null; then
    echo "Restoring missing tracked file: $f"
    git checkout origin/main -- "$f"
  fi
done

# ---------------------------------------------------------------------------
# 2. FNB PDF safety check
# ---------------------------------------------------------------------------
FNB="lib/FNB_FUSION_PRIVATE_WEALTH_ACC_252.pdf"
if [ -f "$FNB" ]; then
  echo "Removing $FNB from the working tree..."
  rm "$FNB"
fi

LEFTOVERS=$(find . -type f -name "*.pdf" \
  -not -path "./node_modules/*" \
  -not -path "./.git/*" \
  -not -path "./.next/*" 2>/dev/null || true)
if [ -n "$LEFTOVERS" ]; then
  echo ""
  echo "WARNING: PDF files still in the repo folder:"
  echo "$LEFTOVERS"
  echo "These are excluded by .gitignore, but move them elsewhere too."
  echo ""
fi

if git ls-files "$FNB" 2>/dev/null | grep -q .; then
  echo ""
  echo "SERIOUS: $FNB is TRACKED in git history."
  echo "Repo is PUBLIC. Rotate FNB creds and purge history with BFG."
  read -p "Press return to close..."
  exit 1
fi

# ---------------------------------------------------------------------------
# 3. Show git status
# ---------------------------------------------------------------------------
echo "--- git status ---"
git status --short | head -80
echo ""

# ---------------------------------------------------------------------------
# 4. Install (always — package.json may have changed) + build
# ---------------------------------------------------------------------------
echo ""
echo "--- npm install (respects package.json changes) ---"
if ! npm install --no-audit --no-fund --prefer-offline; then
  echo ""
  echo "npm install failed. Skipping local build."
  echo "Vercel will run the build on its side."
  echo ""
  echo "If it's an ~/.npm ownership problem, double-click:"
  echo "  fix-npm-cache.command"
  echo ""
  SKIP_BUILD=1
fi

if [ -z "$SKIP_BUILD" ] && [ -d node_modules ]; then
  echo ""
  echo "--- npm run build (production build test) ---"
  if ! npm run build; then
    echo ""
    echo "BUILD FAILED. Fix errors above before pushing."
    echo ""
    read -p "Push anyway and let Vercel build? [y/N] " ANS
    if [ "$ANS" != "y" ] && [ "$ANS" != "Y" ]; then
      exit 1
    fi
  fi
fi

# ---------------------------------------------------------------------------
# 5. Commit + push
# ---------------------------------------------------------------------------
echo ""
echo "--- staging + committing ---"
git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit. Repo is up to date."
else
  # Auto-generate a commit message from what's actually changing.
  git commit -m "$(cat <<'EOF'
Website updates

Includes any pending edits (copy fixes, dependency bumps, new pages,
config changes). See the diff for details.
EOF
)"

  echo ""
  echo "--- pushing to origin/main ---"
  git push origin main
fi

echo ""
echo "==========================================="
echo "  Done. Vercel will auto-deploy in ~30s."
echo "  Watch: https://vercel.com/camerons-projects-9845c7a0/flexo-africa-website"
echo "  Live:  https://www.flexoafrica.com"
echo "==========================================="
echo ""
read -p "Press return to close..."
