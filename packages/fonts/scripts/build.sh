#!/bin/bash

# Exit on error
set -e

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SRC_DIR="$ROOT_DIR/src"
DIST_DIR="$ROOT_DIR/dist"

# Check for --no-dts flag
TSUP_CMD="tsup"
if [[ "$*" == *"--no-dts"* ]]; then
  TSUP_CMD="tsup --no-dts"
fi

# Run tsup
echo "[FONTS] Building TypeScript files..."
cd "$ROOT_DIR"
$TSUP_CMD

# Copy CSS files
echo "[FONTS] Copying CSS files..."
for font_dir in "$SRC_DIR"/*; do
  if [ -d "$font_dir" ]; then
    font_name=$(basename "$font_dir")
    css_source="$font_dir/index.css"
    css_target="$DIST_DIR/$font_name/index.css"
    
    if [ -f "$css_source" ]; then
      mkdir -p "$DIST_DIR/$font_name"
      cp "$css_source" "$css_target"
      echo "[FONTS] $font_name/index.css"
    fi
  fi
done

# Remove bundled CSS from root
if [ -f "$DIST_DIR/index.css" ]; then
  rm "$DIST_DIR/index.css"
fi

echo "[FONTS] Build complete!"

