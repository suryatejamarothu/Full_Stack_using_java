# Task 19: Core Git Operations

```bash
# Initialize repository
git init my-project
cd my-project

# Staging files
echo "# Project Title" > README.md
git add README.md
git add .

# Committing changes
git commit -m "Initial commit with README"

# Pushing to remote (assuming connection)
git remote add origin https://github.com/user/repo.git
git push origin main
```