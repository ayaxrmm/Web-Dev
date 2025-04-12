# from rest_framework import serializers
# from .models import Company, Vacancy

# # ModelSerializer
# class CompanySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Company
#         fields = '__all__'

# #Serializer
# class VacancySerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField(max_length=255)
#     description = serializers.CharField()
#     salary = serializers.FloatField()
#     company = serializers.PrimaryKeyRelatedField(read_only=True)
    
from rest_framework import serializers
from .models import Company, Vacancy

# Using ModelSerializer
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

# Using regular Serializer
class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.IntegerField()

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company_id = validated_data.get('company', instance.company_id)
        instance.save()
        return instance
