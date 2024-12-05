INSTALLED_APPS = [
    # ... 기존 앱 ...
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ... 기존 미들웨어 ...
]

CORS_ALLOW_ALL_ORIGINS = True  # 개발 중에만 사용, 프로덕션에서는 특정 도메인만 허용 