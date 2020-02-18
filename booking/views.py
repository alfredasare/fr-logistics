from django.shortcuts import render


def index(request):
    return render(request, 'booking/index.html', {'title': 'Home - FR Logistics'})


def about(request):
    return render(request, 'booking/about.html', {'title': 'About - FR Logistics'})


def contact(request):
    return render(request, 'booking/contact.html', {'title': 'Contact - FR Logistics'})


def terms(request):
    return render(request, 'booking/terms.html', {'title': 'Terms and Conditions - FR Logistics'})


def book(request):
    return render(request, 'booking/book.html', {'title': 'Book Our Services - FR Logistics'})
