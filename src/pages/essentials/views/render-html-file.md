# Render html file

Djangoda html fayllarni render qilish bizga bir nechta imkoniyatlarni taqdim etadi.

Avvaliga html faylni djangoda qanday qilib render qilishni o'rganamiz.

Proyektimizda ichida `templates` nomli papka ochamiz. Uning ichida html fayl yaratamiz. (Masalan: example.html)
Va html fayliga quyidagi kodni yozamiz.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<h2>Bu sizning djangodagi birinchi html faylingiz.</h2>

</body>
</html>
```

`settings.py` faylida `TEMPLATES` o'zgaruvchisini topib, `templates` papkasini ro'yxatdan o'tkazamiz.

```python {4}
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

Endi html faylni render qilish uchun view yozamiz.

```python {5}
from django.views import View

class ExampleView(View):
    def get(self, request):
        return render(request, 'example.html')
```

Ushbu view `example.html` faylini render qilib, browserda ekranga chiqaradi.

## O'zgaruvchilar

Birinchi qulayligi html faylga o'zgaruvchilarni uzatish mumkin.

```python {6}
from django.views import View

class ExampleView(View):
    def get(self, request):
        return render(request, 'example.html', {
            'now': timezone.now()
        })
```

`now` o'zgaruvchisidan html faylda quyidagicha foydalanish mumkin.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<h2>Bu sizning djangodagi birinchi html faylingiz.</h2>

<p>Hozirgi vaqt: {{ now }}</p>

</body>
</html>
```
