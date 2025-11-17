# 🚀 Quick Start Guide

Get your E-Commerce platform up and running in minutes!

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js 18+ (`node --version`)
- ✅ Python 3.10+ (`python --version`)
- ✅ PostgreSQL 14+ OR Docker
- ✅ Git

## 🎯 Option 1: Quick Start with Docker (Recommended)

### Step 1: Start Database
```bash
# Start PostgreSQL and Redis using Docker
docker-compose up -d

# Verify containers are running
docker-compose ps
```

### Step 2: Setup Backend
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run setup script
python setup.py

# Copy environment file
cp .env.example .env

# Run migrations
python manage.py migrate

# Create superuser (follow prompts)
python manage.py createsuperuser

# Start backend server
python manage.py runserver
```

Backend will be available at: **http://localhost:8000**

### Step 3: Setup Frontend
```bash
# Open a new terminal
cd frontend

# Install dependencies (already done during setup)
npm install

# Start development server
npm run dev
```

Frontend will be available at: **http://localhost:3000**

## 🎯 Option 2: Manual Setup (Without Docker)

### Step 1: Install PostgreSQL Locally

#### Windows:
1. Download from https://www.postgresql.org/download/windows/
2. Install and remember your password
3. Open pgAdmin or psql and create database:
```sql
CREATE DATABASE ecommerce_db;
```

#### Mac (using Homebrew):
```bash
brew install postgresql@15
brew services start postgresql@15
createdb ecommerce_db
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo -u postgres createdb ecommerce_db
```

### Step 2: Configure Backend
```bash
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Copy and edit environment file
cp .env.example .env
# Edit .env and update database credentials

# Run setup
python setup.py

# Migrate database
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```

### Step 3: Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🔍 Verify Installation

### Check Backend:
1. Visit http://localhost:8000/admin/
2. Login with superuser credentials
3. You should see Django admin panel

### Check Frontend:
1. Visit http://localhost:3000
2. You should see the Next.js welcome page

### Check Database:
```bash
# Using Docker
docker exec -it ecommerce_postgres psql -U postgres -d ecommerce_db -c "\dt"

# Using local PostgreSQL
psql -U postgres -d ecommerce_db -c "\dt"
```

## 📦 Next Steps

### 1. Create Django Apps
```bash
cd backend
python manage.py startapp accounts
python manage.py startapp products
python manage.py startapp orders
python manage.py startapp payments
python manage.py startapp dropshipping
```

### 2. Install Additional Frontend Packages
```bash
cd frontend
npm install axios
npm install @tanstack/react-query
npm install zustand  # State management
npm install react-hook-form
npm install zod  # Validation
```

### 3. Setup API Documentation
Backend API docs will be available at:
- Swagger: http://localhost:8000/swagger/
- ReDoc: http://localhost:8000/redoc/

## 🐛 Troubleshooting

### Backend won't start:
- Check if PostgreSQL is running
- Verify .env file has correct database credentials
- Ensure virtual environment is activated
- Run `pip install -r requirements.txt` again

### Frontend won't start:
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check if port 3000 is available

### Database connection error:
- Verify PostgreSQL is running: `docker-compose ps` or `pg_isready`
- Check database credentials in .env
- Ensure database exists: `psql -l`

### Port already in use:
```bash
# Backend (port 8000)
python manage.py runserver 8001

# Frontend (port 3000)
npm run dev -- -p 3001
```

## 🎓 Learning Resources

- Django REST Framework: https://www.django-rest-framework.org/
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- PostgreSQL: https://www.postgresql.org/docs/

## 🆘 Need Help?

Check the detailed README files:
- Main README: `README.md`
- Backend README: `backend/README.md`
- Frontend README: `frontend/README.md`

---

**Happy Coding! 🚀**

