from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import AuthURL

urlpatterns = [
    path('/get-auth-url', TemplateView.as_view(template_name='index.html')),
]