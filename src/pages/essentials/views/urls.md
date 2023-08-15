# URLs

Browserda proyektning biror elektron manziliga kirganingizda biror `view` ishga tushadi. Aynan qaysi manzilda qaysi view
ishga tushishi `urls` orqali boshqariladi.

```python
from django.url import path
from myapp.views import example

urlpatterns = [
    path('example/', example)
]
```

Browserda http://127.0.0.1:8000/example/ manziliga kirilsa, `example` nomli view ishga tushadi.

Yoki bo'lmasam:

```python
from django.url import path
from myapp.views import hello

urlpatterns = [
    path('api/hello/', hello)
]
```

bo'lsa, browserda http://127.0.0.1:8000/api/hello/ manziliga kirilsa, `hello` nomli `view` ishga tushadi.

## Urlni nomlash

Qo'shimcha ravishda har bir ro'yxatdan o'tkazilgan elektron manzilni nomlash ham mumkin.

```python
from django.url import path
from myapp.views import hello, example

urlpatterns = [
    path('api/hello/', hello, name='hello'),
    path('example/', example, name='example')
]
```

## Argument

Url orqali viewga argumentlarni uzatish ham mumkin.

```python
from django.url import path
from myapp.views import example

urlpatterns = [
    path('example/<int:pk>/', example, name='example')
]
```

http://127.0.0.1:8000/example/5/ manziliga kirilganda `pk` argumentining qiymati `5` bo'ladi.

Viewda pk argumentiga quyidagicha murojaat qilish mumkin:

```python {3}
from django.http import HttpResponse

def example(request, pk):
    return HttpResponse(f"pk argumentining qiymati: {pk}")
```

`<int:pk>` - yozilgani uchun `pk` o'rnida faqat butun son turishi mumkin.

Agar `url` quyidagicha bo'lsa,

```python {5}
from django.url import path
from myapp.views import example

urlpatterns = [
    path('example/<str:name>/', example, name='example')
]
```

Endi bizda argument `name` va uning qiymati `str` toifasida bo'ladi. Albatta viewda ham `name` argumentiga murojaat
qilish uchun uning kodi quyidagicha bo'lishi kerak:

```python {3}
from django.http import HttpResponse

def example(request, name):
    return HttpResponse(f"name argumentining qiymati: {name}")
```

## Bir nechta argumentlar

Bir nechta argumentlarni ham uzatish mumkin.

```python {5}
from django.url import path
from myapp.views import example

urlpatterns = [
    path('example/<int:pk>/<str:name>/', example, name='example')
]
```

View esa,

```python {3}
from django.http import HttpResponse

def example(request, pk, name):
    return HttpResponse(f"pk argumentining qiymati: {pk}, name argumentining qiymati: {name}")
```
