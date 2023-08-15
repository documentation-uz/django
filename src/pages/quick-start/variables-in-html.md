# Variables in html

O'zgaruvchilarni html faylga views.py faylidagi funksiyalar orqali uzatish mumkin. Buning uchun `product/views.py`
faylida quyidagicha o'zgartirish qilish kerak.

```python
from django.shortcuts import render

import datetime

def example(request):
    return render(request, 'example.html', {
        'sana': str(datetime.date.today()),
        'ism': 'Asliddin'
    })
```

Bu yerda html fayl uchun `sana` va `ism` o'zgaruvchilarini e'lon qildik. Endi ularni html faylda qanday yozish
kerakligini ko'rib chiqamiz. example.html faylni quyidagi ko'rinishga o'zgartiramiz.

**`templates/example.html`**
```html {15,17}
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

</body>
</html>
```

Browserda manzilga kirganimizda `ism` va `sana` o'zgaruvchilarining qiymatlari ekranda ko'rinadi.
