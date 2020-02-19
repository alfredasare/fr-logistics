from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ContactForm


def index(request):
    return render(request, 'booking/index.html', {'title': 'Home - FR Logistics'})


def about(request):
    return render(request, 'booking/about.html', {'title': 'About - FR Logistics'})


def contact(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = f"Name : {form.cleaned_data['name']}  \nEmail : {form.cleaned_data['email']} \nMessage : {form.cleaned_data['message']}"
            try:
                send_mail(name, message, email, ['alfredasare101@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found')
            return redirect('success')

    return render(request, 'booking/contact.html', {'title': 'Contact - FR Logistics', 'form': form})


def email_success(request):
    return render(request, 'booking/success.html', {'title': 'Contact - FR Logistics'})


def terms(request):
    return render(request, 'booking/terms.html', {'title': 'Terms and Conditions - FR Logistics'})


def book(request):
    return render(request, 'booking/book.html', {'title': 'Book Our Services - FR Logistics'})
