# Simple queryset

Bu darsda bazada turgan ma'lumotlarni html fayl orqali browser oynasida ko'rsatishni o'rganamiz.

Avval `product/views.py` fayliga kiramiz, funksiya ichida bazadan barcha `Product` modeliga tegishli obyektlarni olish
kodini yozamiz va bu ma'lumotlarni o'zgaruvchiga biriktirib, html faylga uzatamiz.

**`product/views.py`**

```python {5,8,13}
from django.shortcuts import render

import datetime

from .models import Product

def example(request):
    products = Product.objects.all()
    
    return render(request, 'example.html', {
        'sana': str(datetime.date.today()),
        'ism': 'Asliddin',
        'products': products
    })
```

Bu yerda `queryset`

```python
products = Product.objects.all()
```

va bu `queryset`ning eng oddiy ko'rinishi.


Endi `example.html`ga quyidagi o'zgarishlarni kiritamiz.

**`templates/example.html`**

```html {19-22}
{% load static %}

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{% static 'style.css' %}">
</head>
<body>

<h1 class="text-center">Salom {{ ism }}</h1>

<h3 class="text-center">Bugungi sana: {{ sana }}</h3>

<h3>Mavjud mahsulotlar</h3>
{% for product in products %}
    <p>{{ product.name }}</p>
{% endfor %}

</body>
</html>
```

Browserda manzilga kirsangiz, obyektlar ro'yxatini ko'rishingiz mumkin.
