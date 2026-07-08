#!/bin/bash
# fix-npm-cache.command
# One-time helper: your ~/.npm cache has root-owned files (from an old
# `sudo npm ...` invocation) that block normal npm installs. This resets
# ownership back to you. You'll be prompted for your Mac password once.

echo ""
echo "==========================================="
echo "  Fix ~/.npm cache ownership"
echo "==========================================="
echo ""
echo "This runs one sudo command:"
echo "  sudo chown -R \$(id -u):\$(id -g) ~/.npm"
echo ""
echo "Your Mac password will be requested."
echo ""

sudo chown -R "$(id -u):$(id -g)" ~/.npm

if [ $? -eq 0 ]; then
  echo ""
  echo "Done. Your npm cache is yours again."
  echo "Future 'npm install' commands won't need workarounds."
else
  echo ""
  echo "Something went wrong. Try running the command manually in Terminal:"
  echo "  sudo chown -R \$(id -u):\$(id -g) ~/.npm"
fi

echo ""
read -p "Press return to close..."
