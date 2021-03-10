from api.serializers import RoomSerializer
from django.db.models import query
from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework import generics
from .models import Room


# Create your views here.

# def main(request):
#     return HttpResponse("Hello")

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer