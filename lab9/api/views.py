# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Company, Vacancy
# from .serializers import CompanySerializer, VacancySerializer

# @api_view(['GET'])
# def company_list(request):
#     companies = Company.objects.all()
#     serializer = CompanySerializer(companies, many=True)
#     return Response(serializer.data)
# @api_view(['GET'])
# def company_detail(request, id):
#     try:
#         company = Company.objects.get(pk=id)
#     except Company.DoesNotExist:
#         return Response({'error':'Company not found'}, status=404)
#     serializer = CompanySerializer(company)
#     return Response(serializer.data)

# api_view(['GET'])
# def company_vacancies(request, id):
#     try:
#         company = Company.objects.get(pk=id)
#     except Company.DoesNotExist:
#         return Response({'error':'Company not found'}, status=404)
#     vacancies = company.vacancies.all()
#     serializer = VacancySerializer(vacancies, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def vacancy_list(request):
#     vacancies = Vacancy.objects.all()
#     serializer = VacancySerializer(vacancies, many=True)
#     return Response(serializer.data)
# @api_view(['GET'])
# def vacancy_detail(request, id):
#     try:
#         vacancies = Vacancy.objects.get(pk=id)
#     except Vacancy.DoesNotExist:
#         return Response({'error':'Vacancy not found'}, status=404)
#     serializer = VacancySerializer(vacancies)
#     return Response(serializer.data)
# @api_view(['GET'])
# def top_ten_vacancies(request):
#     vacancies = Vacancy.objects.order_by('-salary')[:10]
#     serializer = VacancySerializer(vacancies, many=True)
#     return Response(serializer.data)



from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Companies

class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacanciesByCompanyView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)


# Vacancies

class VacancyListCreateView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacanciesView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
