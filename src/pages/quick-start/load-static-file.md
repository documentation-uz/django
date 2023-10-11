# Load static file

Bu darsda statik fayllarni html faylga qo'shishni o'rganamiz. Statik fayllarga css fayllar, rasmlar, videolar va boshqa
resurslar kiradi.

`assets` nomli papka ochamiz.

```text {1}
assets/
config/
product/
templates/
manage.py
```

Uning ichida `style.css` nomli fayl yaratamiz va uning ichiga quyidagi kodni kiritamiz.

::: code-group

```css [assets/style.css]
.text-center {
    text-align: center;
}
```

:::

Ana endi `config/settings.py` faylida assets papkasini ro'yxatdan o'tkazib qo'yamiz.

::: code-group

```python {5-7} [config/settings.py]
...

STATIC_URL = 'static/'

STATICFILES_DIRS = [
    BASE_DIR / 'assets'
]

...
```

:::

`example.html` fayl ichida `style.css` faylini chaqirish uchun quyidagi o'zgarishlarni kiritamiz.

::: code-group

```html {1,11,15,17} [templates/example.html]
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

<h1 class="text-center">Xush kelibsiz</h1>

<h3 class="text-center">Tabriklayman!!! Siz django proyektingizda birinchi html faylingizni render qildingiz.</h3>

</body>
</html>
```

:::

Browserda manzilga kirib ko'rsangiz css fayl ishlaganini ko'rasiz.
