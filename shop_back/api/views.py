# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .models import Product, Category
# from .serializers import ProductSerializer, CategorySerializer

# @api_view(['GET'])
# def product_list(request):
#     products = Product.objects.all()
#     serializer = ProductSerializer(products, many=True)
#     return Response(serializer.data)
# @api_view(['GET'])
# def product_detail(request, id):
#     product = Product.objects.get(id=id)
#     serializer = ProductSerializer(product)
#     return Response(serializer.data)
# @api_view(['GET'])
# def category_list(request):
#     categories = Category.objects.all()
#     serializer = CategorySerializer(categories, many=True)
#     return Response(serializer.data)
# @api_view(['GET'])
# def category_detail(request, id):
#     category = Category.objects.get(id=id)
#     serializer = CategorySerializer(category)
#     return Response(serializer.data)
# @api_view(['GET'])
# def category_products(request, id):
#     category = Category.objects.get(id=id)
#     products = category.products.all()
#     serializer = ProductSerializer(products, many=True)
#     return Response(serializer.data)

from rest_framework import viewsets
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):  
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
