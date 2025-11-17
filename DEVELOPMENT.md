# 🛠️ Development Guide

## Project Architecture

### High-Level Overview
```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   Next.js       │         │   Django REST   │         │   PostgreSQL    │
│   Frontend      │ ◄─────► │   Backend       │ ◄─────► │   Database      │
│   (Port 3000)   │   API   │   (Port 8000)   │         │   (Port 5432)   │
└─────────────────┘         └─────────────────┘         └─────────────────┘
                                     │
                                     ▼
                            ┌─────────────────┐
                            │   Redis Cache   │
                            │   (Port 6379)   │
                            └─────────────────┘
```

### Technology Stack

#### Frontend (Next.js)
- **Framework**: Next.js 15 with App Router
- **UI**: Tailwind CSS + shadcn/ui (recommended)
- **State**: React Context API / Zustand
- **Forms**: React Hook Form + Zod validation
- **API Client**: Axios / TanStack Query
- **Auth**: NextAuth.js or custom JWT

#### Backend (Django)
- **Framework**: Django 5.0 + DRF 3.14
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **Task Queue**: Celery
- **Auth**: JWT (djangorestframework-simplejwt)
- **API Docs**: drf-yasg (Swagger/OpenAPI)

## Development Workflow

### 1. Feature Development Process

#### Backend (Django)
```bash
# 1. Create a new branch
git checkout -b feature/product-catalog

# 2. Create Django app
cd backend
python manage.py startapp products

# 3. Define models in products/models.py
# 4. Create serializers in products/serializers.py
# 5. Create views in products/views.py
# 6. Define URLs in products/urls.py
# 7. Register in ecommerce_project/settings.py

# 8. Make and run migrations
python manage.py makemigrations
python manage.py migrate

# 9. Create tests in products/tests.py
python manage.py test products

# 10. Register in admin (products/admin.py)
```

#### Frontend (Next.js)
```bash
# 1. Create feature branch (same as backend)
git checkout -b feature/product-catalog

# 2. Create components
cd frontend
mkdir -p app/components/products
touch app/components/products/ProductCard.tsx
touch app/components/products/ProductList.tsx

# 3. Create API service
mkdir -p lib/api
touch lib/api/products.ts

# 4. Create pages/routes
mkdir -p app/products
touch app/products/page.tsx
touch app/products/[id]/page.tsx

# 5. Add types
mkdir -p types
touch types/product.ts

# 6. Test in browser
npm run dev
```

### 2. Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: add product catalog"

# Push to remote
git push origin feature/feature-name

# Create Pull Request on GitHub
# After review and approval, merge to main
```

### 3. Database Migrations

```bash
# Create migration
python manage.py makemigrations

# View SQL
python manage.py sqlmigrate app_name migration_number

# Apply migrations
python manage.py migrate

# Rollback migration
python manage.py migrate app_name previous_migration_number
```

### 4. Testing Strategy

#### Backend Tests
```python
# backend/products/tests.py
from django.test import TestCase
from rest_framework.test import APITestCase
from .models import Product

class ProductModelTest(TestCase):
    def test_create_product(self):
        product = Product.objects.create(
            name="Test Product",
            price=99.99
        )
        self.assertEqual(product.name, "Test Product")

class ProductAPITest(APITestCase):
    def test_get_products(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, 200)
```

Run tests:
```bash
python manage.py test
python manage.py test products
python manage.py test products.tests.ProductModelTest
```

#### Frontend Tests
```bash
# Install testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Run tests
npm test
```

## Code Style & Standards

### Backend (Python)
- Follow PEP 8
- Use type hints
- Write docstrings
- Max line length: 100 characters

```python
from typing import List, Optional
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    """Serializer for Product model."""
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description']
```

### Frontend (TypeScript)
- Use TypeScript strictly
- Follow Airbnb style guide
- Use functional components
- Prefer named exports

```typescript
// types/product.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// components/ProductCard.tsx
export function ProductCard({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}
```

## Environment Management

### Development
```bash
# Backend
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Production
```bash
# Backend
DEBUG=False
ALLOWED_HOSTS=yourdomain.com
SECRET_KEY=strong-random-key

# Frontend
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Common Tasks

### Add New Django App
```bash
python manage.py startapp app_name
# Add to INSTALLED_APPS in settings.py
```

### Install New Python Package
```bash
pip install package-name
pip freeze > requirements.txt
```

### Install New NPM Package
```bash
cd frontend
npm install package-name
```

### Reset Database
```bash
python manage.py flush
python manage.py migrate
python manage.py createsuperuser
```

### Generate API Documentation
```bash
# Access Swagger UI
http://localhost:8000/swagger/

# Access ReDoc
http://localhost:8000/redoc/
```

## Performance Optimization

### Backend
- Use `select_related()` and `prefetch_related()` for queries
- Implement caching with Redis
- Use database indexing
- Optimize serializers

### Frontend
- Use Next.js Image component
- Implement lazy loading
- Use React.memo for expensive components
- Optimize bundle size

## Security Best Practices

- Never commit .env files
- Use environment variables for secrets
- Implement CORS properly
- Use HTTPS in production
- Validate all user inputs
- Implement rate limiting
- Use parameterized queries
- Keep dependencies updated

---

**Happy Development! 🚀**

