# 🎮 Common Commands Reference

Quick reference for frequently used commands during development.

---

## 🐳 Docker Commands

### Start Services
```bash
# Start all services (PostgreSQL, Redis, pgAdmin)
docker-compose up -d

# Start specific service
docker-compose up -d postgres
docker-compose up -d redis

# View logs
docker-compose logs -f
docker-compose logs -f postgres
```

### Stop Services
```bash
# Stop all services
docker-compose down

# Stop and remove volumes (⚠️ deletes data)
docker-compose down -v
```

### Check Status
```bash
# List running containers
docker-compose ps

# Check PostgreSQL
docker exec -it ecommerce_postgres psql -U postgres -c "SELECT version();"

# Check Redis
docker exec -it ecommerce_redis redis-cli ping
```

---

## 🐍 Backend (Django) Commands

### Setup & Installation
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate          # Windows
source venv/bin/activate       # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run setup script
python setup.py
```

### Django Project Management
```bash
# Create new app
python manage.py startapp app_name

# Make migrations
python manage.py makemigrations
python manage.py makemigrations app_name

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run development server
python manage.py runserver
python manage.py runserver 8001  # Different port

# Django shell
python manage.py shell

# Collect static files
python manage.py collectstatic
```

### Database Commands
```bash
# Show migrations
python manage.py showmigrations

# SQL for migration
python manage.py sqlmigrate app_name migration_number

# Flush database (⚠️ deletes all data)
python manage.py flush

# Load fixtures
python manage.py loaddata fixture_name

# Dump data
python manage.py dumpdata app_name > fixture.json
```

### Testing
```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test app_name

# Run specific test class
python manage.py test app_name.tests.TestClassName

# Run with coverage
coverage run --source='.' manage.py test
coverage report
coverage html
```

### Package Management
```bash
# Install new package
pip install package-name

# Update requirements.txt
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt

# Upgrade package
pip install --upgrade package-name
```

---

## ⚛️ Frontend (Next.js) Commands

### Setup & Installation
```bash
cd frontend

# Install dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Update package
npm update package-name
```

### Development
```bash
# Start development server
npm run dev

# Start on different port
npm run dev -- -p 3001

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint -- --fix
```

### Testing
```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Package Management
```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Remove package
npm uninstall package-name

# Clear cache
npm cache clean --force
```

---

## 🗄️ Database Commands

### PostgreSQL (using psql)
```bash
# Connect to database
psql -U postgres -d ecommerce_db

# Using Docker
docker exec -it ecommerce_postgres psql -U postgres -d ecommerce_db
```

### Common SQL Commands
```sql
-- List databases
\l

-- Connect to database
\c ecommerce_db

-- List tables
\dt

-- Describe table
\d table_name

-- List users
\du

-- Quit
\q

-- Create database
CREATE DATABASE ecommerce_db;

-- Drop database (⚠️ deletes all data)
DROP DATABASE ecommerce_db;

-- Create user
CREATE USER myuser WITH PASSWORD 'mypassword';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE ecommerce_db TO myuser;
```

---

## 🔧 Git Commands

### Basic Workflow
```bash
# Check status
git status

# Create new branch
git checkout -b feature/feature-name

# Add files
git add .
git add file-name

# Commit changes
git commit -m "feat: add feature description"

# Push to remote
git push origin branch-name

# Pull latest changes
git pull origin main

# Switch branch
git checkout branch-name

# Merge branch
git merge branch-name

# Delete branch
git branch -d branch-name
```

### Useful Commands
```bash
# View commit history
git log
git log --oneline

# View changes
git diff
git diff file-name

# Stash changes
git stash
git stash pop

# Reset changes
git reset --hard HEAD
git reset --soft HEAD~1

# View remote
git remote -v
```

---

## 🚀 Deployment Commands

### Backend (Example for Render/Railway)
```bash
# Install gunicorn
pip install gunicorn

# Run with gunicorn
gunicorn ecommerce_project.wsgi:application --bind 0.0.0.0:8000

# Collect static files
python manage.py collectstatic --noinput
```

### Frontend (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🧹 Cleanup Commands

### Backend
```bash
# Remove Python cache
find . -type d -name "__pycache__" -exec rm -r {} +
find . -type f -name "*.pyc" -delete

# Remove virtual environment
rm -rf venv  # Mac/Linux
rmdir /s venv  # Windows
```

### Frontend
```bash
# Remove node_modules
rm -rf node_modules  # Mac/Linux
rmdir /s node_modules  # Windows

# Remove build files
rm -rf .next
rm -rf out

# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Docker
```bash
# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune

# Remove everything (⚠️ use with caution)
docker system prune -a
```

---

## 📝 Quick Tips

### Run Both Servers Simultaneously
```bash
# Terminal 1 - Backend
cd backend
venv\Scripts\activate
python manage.py runserver

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - Docker (if needed)
docker-compose up
```

### Check if Ports are in Use
```bash
# Windows
netstat -ano | findstr :8000
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :8000
lsof -i :3000
```

### Kill Process on Port
```bash
# Windows
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

---

**Bookmark this file for quick reference! 📌**

