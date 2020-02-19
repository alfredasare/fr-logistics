from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('success', views.email_success, name='success'),
    path('terms', views.terms, name='terms'),
    path('book', views.book, name='book')
]
