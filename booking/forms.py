from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={'onfocusout': 'validateName()'}), max_length=50, required=True)
    email = forms.EmailField(widget=forms.EmailInput(attrs={'onfocusout': 'validateMail()'}), required=True)
    message = forms.CharField(widget=forms.Textarea(attrs={'onfocusout': 'validateMessage()'}), required=True)
