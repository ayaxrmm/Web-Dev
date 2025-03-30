# from django.urls import path 
# from .views import product_list, product_detail, category_list, category_detail, category_products
# urlpatterns = [
#     path('products/', product_list),
#     path('products/<int:id>/', product_detail),
#     path('categories/', category_list),
#     path('categories/<int:id>/', category_detail),
#     path('categories/<int:id>/products/', category_products),
# ]

from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = router.urls
