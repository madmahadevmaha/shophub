# E-Commerce & Dropshipping Platform

A full-stack e-commerce platform with dropshipping capabilities, built with Next.js (Frontend) and Django REST Framework (Backend).

## 🏗️ Project Structure

```
E-Commerce/
├── frontend/          # Next.js + Tailwind CSS
├── backend/           # Django REST Framework
└── README.md
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Context / Redux (to be added)
- **API Client**: Axios / Fetch

### Backend
- **Framework**: Django 5.0 + Django REST Framework
- **Database**: PostgreSQL
- **Authentication**: JWT (Simple JWT)
- **Caching**: Redis (Phase 3+)
- **Task Queue**: Celery
- **Payment**: Razorpay, Stripe
- **API Documentation**: drf-yasg (Swagger)

## 📋 Prerequisites

- **Node.js**: v18+ and npm
- **Python**: 3.10+
- **PostgreSQL**: 14+
- **Redis**: 7+ (optional, for Phase 3+)

## 🛠️ Installation & Setup

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend

# Run the setup script (creates venv, installs dependencies, creates Django project)
python setup.py

# Or manually:
# 1. Create virtual environment
python -m venv venv

# 2. Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Copy environment file
cp .env.example .env
# Update .env with your configuration

# 5. Create PostgreSQL database
# Using psql:
createdb ecommerce_db

# 6. Run migrations
python manage.py migrate

# 7. Create superuser
python manage.py createsuperuser

# 8. Run development server
python manage.py runserver
```

The backend will run on `http://localhost:8000`

## 📦 Development Roadmap

### ✅ Phase 1 - Foundation (Current)
- [x] Project structure setup
- [x] Frontend initialization (Next.js + Tailwind)
- [x] Backend initialization (Django REST)
- [ ] Database configuration
- [ ] User authentication
- [ ] Basic product catalog

### Phase 2 - Core E-Commerce (4-6 weeks)
- [ ] Shopping cart & wishlist
- [ ] Checkout workflow
- [ ] Payment gateway integration
- [ ] Order management
- [ ] Admin dashboard

### Phase 3 - Dropshipping Integration (6-8 weeks)
- [ ] Supplier API integration
- [ ] Inventory sync
- [ ] Auto-order forwarding
- [ ] Shipping tracking
- [ ] Admin reports

### Phase 4 - Enhancement (6 weeks)
- [ ] Reviews & ratings
- [ ] Advanced search & filters
- [ ] Coupons & discounts
- [ ] Loyalty program
- [ ] Notifications (Email/SMS/WhatsApp)

### Phase 5 - Mobile App (8-10 weeks)
- [ ] React Native app
- [ ] Push notifications
- [ ] Mobile payments
- [ ] App store deployment

### Phase 6 - Scaling (Ongoing)
- [ ] AI recommendations
- [ ] Multi-vendor marketplace
- [ ] Analytics & insights
- [ ] Cloud deployment

## 🔑 Environment Variables

See `backend/.env.example` for required environment variables.

## 📚 API Documentation

Once the backend is running, visit:
- Swagger UI: `http://localhost:8000/swagger/`
- ReDoc: `http://localhost:8000/redoc/`

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
python manage.py test
```

## 📝 License

This project is private and proprietary.

## 👥 Contributors

- Mahadevan Ravichandra

---

**Status**: 🚧 In Development - Phase 1

