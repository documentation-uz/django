# Render html file

Bu darsda html faylni django orqali ekranga chiqarishni o'rganamiz.

Birinchi bo'lib, `templates` nomli papka ochib olamiz.

```text {3}
config/
product/
templates/
manage.py
```

`templates` papkasini ichida tushunish oson bo'lishi uchun `example.html` nomli fayl yaratamiz va fayl ichiga quyidagi
kodni kiritamiz.

::: code-group

```html [templates/example.html]
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

<h1>Xush kelibsiz</h1>

<h3>Tabriklayman!!! Siz django proyektingizda birinchi html faylingizni render qildingiz.</h3>

</body>
</html>
```

:::

Endi `templates` papkasini proyektimizda ro'yxatdan o'tkazamiz. Buning uchun `config/settings.py` fayliga kiramiz,
`TEMPLATES` o'zgaruvchisini topamiz va quyidagi o'zgartirishni kiritamiz.

::: code-group

```python {6-8} [config/settings.py]
...

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / 'templates'
        ],
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

...
```

:::

Navbat `product/views.py` fayliga keldi. Fayldagi kodni quyidagiga almashtiramiz.

::: code-group

```python [product/views.py]
from django.shortcuts import render

def example(request):
    return render(request, 'example.html')
```

:::

Endi siz browserda http://127.0.0.1:8000/example/ manziliga kirsangiz html fayli render qilinganini ko'rasiz.
