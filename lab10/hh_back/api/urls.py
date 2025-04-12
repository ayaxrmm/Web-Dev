from django.urls import path
from . import views

urlpatterns = [
    # FBV
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),

    # CBV
    path('vacancies/', views.VacancyListCreateView.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', views.VacanciesByCompanyView.as_view()),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view()),
]
