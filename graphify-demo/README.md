# Graphify Demo Project

This repository demonstrates how Graphify transforms a codebase into a queryable knowledge graph.

## Project Structure

```
graphify-demo/
├── src/              # Source code files (TypeScript/JavaScript)
├── docs/             # Documentation files
└── config/           # Configuration files
```

## What Graphify Indexes

Graphify analyzes this repository to build a knowledge graph containing:

- **Nodes**: Functions, classes, variables, and other code entities
- **Edges**: Import/export relationships, function calls, class inheritance
- **Metadata**: Language usage, file counts, complexity metrics

## Indexing with Graphify

To index this repository with Graphify:

```bash
graphify install
graphify index
```

The tool will:
1. Parse all source files using AST analysis
2. Build a dependency graph of imports/exports
3. Extract function signatures and relationships
4. Create a queryable knowledge graph

## Available Scripts

- `graphify analyze` - Run detailed code analysis
- `graphify graph` - Generate the knowledge graph visualization
- `graphify query` - Query the graph for specific relationships