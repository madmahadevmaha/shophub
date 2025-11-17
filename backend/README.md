# E-Commerce Backend (Django REST Framework)

## Quick Start

### 1. Setup Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and update with your settings
```

### 4. Setup Database

#### Option A: Using Docker (Recommended)
```bash
# From the root directory
docker-compose up -d postgres
```

#### Option B: Local PostgreSQL
```bash
# Create database
createdb ecommerce_db

# Or using psql
psql -U postgres
CREATE DATABASE ecommerce_db;
```

### 5. Initialize Django Project

```bash
# Run the setup script
python setup.py

# Or manually create the project
django-admin startproject ecommerce_project .
```

### 6. Create Django Apps

```bash
python manage.py startapp accounts      # User management
python manage.py startapp products      # Product catalog
python manage.py startapp orders        # Order management
python manage.py startapp payments      # Payment processing
python manage.py startapp dropshipping  # Dropshipping integration
python manage.py startapp notifications # Email/SMS notifications
```

### 7. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 8. Create Superuser

```bash
python manage.py createsuperuser
```

### 9. Run Development Server

```bash
python manage.py runserver
```

Visit:
- Admin Panel: http://localhost:8000/admin/
- API Root: http://localhost:8000/api/
- Swagger Docs: http://localhost:8000/swagger/

## Project Structure

```
backend/
├── ecommerce_project/     # Main project settings
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── accounts/              # User authentication & profiles
├── products/              # Product catalog & categories
├── orders/                # Order management
├── payments/              # Payment gateway integration
├── dropshipping/          # Supplier integration
├── notifications/         # Email/SMS/WhatsApp
├── manage.py
├── requirements.txt
└── .env
```

## API Endpoints (Planned)

### Authentication
- POST `/api/auth/register/` - User registration
- POST `/api/auth/login/` - User login
- POST `/api/auth/logout/` - User logout
- POST `/api/auth/refresh/` - Refresh JWT token
- GET `/api/auth/profile/` - Get user profile
- PUT `/api/auth/profile/` - Update user profile

### Products
- GET `/api/products/` - List all products
- GET `/api/products/{id}/` - Get product details
- POST `/api/products/` - Create product (admin)
- PUT `/api/products/{id}/` - Update product (admin)
- DELETE `/api/products/{id}/` - Delete product (admin)
- GET `/api/categories/` - List categories

### Cart & Wishlist
- GET `/api/cart/` - Get user's cart
- POST `/api/cart/add/` - Add item to cart
- PUT `/api/cart/update/{id}/` - Update cart item
- DELETE `/api/cart/remove/{id}/` - Remove from cart
- GET `/api/wishlist/` - Get wishlist
- POST `/api/wishlist/add/` - Add to wishlist

### Orders
- GET `/api/orders/` - List user's orders
- GET `/api/orders/{id}/` - Get order details
- POST `/api/orders/create/` - Create new order
- GET `/api/orders/{id}/track/` - Track order

### Payments
- POST `/api/payments/create/` - Create payment
- POST `/api/payments/verify/` - Verify payment
- GET `/api/payments/{id}/status/` - Payment status

## Development Commands

```bash
# Create new app
python manage.py startapp app_name

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run tests
python manage.py test

# Collect static files
python manage.py collectstatic

# Run development server
python manage.py runserver

# Django shell
python manage.py shell
```

## Testing

```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test accounts

# Run with coverage
coverage run --source='.' manage.py test
coverage report
coverage html
```

## Deployment Checklist

- [ ] Set DEBUG=False in production
- [ ] Configure ALLOWED_HOSTS
- [ ] Set strong SECRET_KEY
- [ ] Configure production database
- [ ] Setup static files serving
- [ ] Configure CORS properly
- [ ] Setup SSL/HTTPS
- [ ] Configure email backend
- [ ] Setup logging
- [ ] Configure Celery for background tasks
- [ ] Setup monitoring (Sentry, etc.)

