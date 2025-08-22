#!/bin/bash

# Development script that watches for changes and rebuilds automatically

echo "🚀 Starting development environment..."

# Function to rebuild UI package
rebuild_ui() {
    echo "📦 Rebuilding UI package..."
    cd packages/ui && npm run build && cd ../..
    echo "✅ UI package rebuilt successfully!"
}

# Initial build
rebuild_ui

# Watch for changes in UI package source
echo "👀 Watching for changes in packages/ui/src..."
fswatch -o packages/ui/src | while read f; do
    echo "🔄 Change detected in UI package..."
    rebuild_ui
done
