from django.shortcuts import render
from django.contrib import auth

def main(request):
    args = {}
    return render(request, 'html/main.html',args)

def food(request):
    args = {}
    return render(request, 'html/food.html',args)