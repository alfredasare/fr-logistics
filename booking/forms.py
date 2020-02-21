from django import forms
from django.forms import ModelForm
from .models import *


class ContactForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={'onfocusout': 'validateName()'}), max_length=50, required=True)
    email = forms.EmailField(widget=forms.EmailInput(attrs={'onfocusout': 'validateMail()'}), required=True)
    message = forms.CharField(widget=forms.Textarea(attrs={'onfocusout': 'validateMessage()'}), required=True)


class DeliveryForm(forms.ModelForm):
    class Meta:
        model = DeliveryModel
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Enter your name', 'onfocusout': 'validateName()'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Enter your email', 'onfocusout': 'validateMail()'}),
            'contact': forms.TextInput(attrs={'placeholder': 'Enter your contact', 'onfocusout': 'validateContact()'}),
            'location_from': forms.TextInput(attrs={'placeholder': 'Enter GPS address of pickup point"', 'onfocusout': 'validateFrom()'}),
            'location_to': forms.TextInput(attrs={'placeholder': 'Enter GPS address of destination', 'onfocusout': 'validateTo()'}),
            'items_list': forms.Textarea(attrs={'placeholder': 'List your items (One item per line)', 'onfocusout': 'validateItems()'}),
        }
        fields = ['name', 'email', 'contact', 'location_from', 'location_to', 'items_list']


class SafeKeepingForm(forms.ModelForm):
    class Meta:
        model = SafeKeepingModel
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Enter your name', 'onfocusout': 'validateName2()'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Enter your email', 'onfocusout': 'validateMail2()'}),
            'contact': forms.TextInput(attrs={'placeholder': 'Enter your contact', 'onfocusout': 'validateContact2()'}),
            'location_from': forms.TextInput(attrs={'placeholder': 'Enter GPS address of pickup point"', 'onfocusout': 'validateHall()'}),
            'date': forms.DateInput(attrs={'placeholder': 'Return date', 'onfocusout': 'validateDate2()'}),
            'items_list': forms.Textarea(attrs={'placeholder': 'List your items (One item per line)', 'onfocusout': 'validateItems2()'}),
        }
        fields = ['name', 'email', 'contact', 'location_from', 'date', 'items_list']


class WarehousingForm(forms.ModelForm):
    class Meta:
        model = WarehousingModel
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Enter your name', 'onfocusout': 'validateName3()'}),
            'name_of_business': forms.TextInput(attrs={'placeholder': 'Enter name of business', 'onfocusout': 'validateBusiness()'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Enter your email', 'onfocusout': 'validateMail3()'}),
            'contact': forms.TextInput(attrs={'placeholder': 'Enter your contact', 'onfocusout': 'validateContact3()'}),
            'location_from': forms.TextInput(
                attrs={'placeholder': 'Enter GPS address of pickup point"', 'onfocusout': 'validateFrom3()'}),
            'items_list': forms.Textarea(
                attrs={'placeholder': 'List your items (One item per line)', 'onfocusout': 'validateItems3()'}),
        }
        fields = ['name', 'name_of_business', 'email', 'contact', 'location_from', 'items_list']
