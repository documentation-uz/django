# Function based views

Bu mavzuda biz funksiyaga asoslangan `view`larni qanday yozishni o'rganamiz. Oddiy qilib `view`ning funksiya
ko'rinishida yozilgan varianti.

Sodda ko'rinishda:

```python
from django.http import HttpResponse

def salom(request):
    return HttpResponse("Salom. Bu sizning birinchi matningiz.")
```

Bu yerda `salom` nomli view yozildi. Qachonki foydalanuvchi bu viewga murojaat qilganda `HttpResponse` klassining
ichidagi
matnni browser oynasiga chiqaradi.

`request` parametri foydalanuvchi haqida qo'shimcha ma'lumotlarni olish uchun foydalaniladi.

Masalan foydalanuvchi qaysi browserdan foydalanayotgani, qanday qurilma orqali so'rov yuborgani va boshqa turli xil
ma'lumotlarni olish mumkin.

Misol uchun foydalanuvchi qaysi metod bilan murojaat qilayotganini quyidagicha aniqlash mumkin:

```python {4}
from django.http import HttpResponse

def salom(request):
    method = request.method
    return HttpResponse(f"Salom. Siz {method} metodi bilan murojaat qildingiz.")
```

`.method` - `request` parametrining atributi hisoblanadi. Atributlarning to'liq ro'yxati
bilan [bu yerda](../../api-reference/view-http-request-attributes/index.md) tanishib chiqishingiz mumkin.

Shuningdek request parametrining metodlari orqali ham turli ma'lumotlarni olish mumkin.

```python {4}
from django.http import HttpResponse

def salom(request):
    host = request.get_host()
    return HttpResponse(f"Salom. Sizning hostingiz {host}.")
```

`get_host()` metodi orqali host nomini aniqlash mumkin.

`request` parametrining metodlari bilan [bu yerda](../../api-reference/view-http-request-methods/index.md) to'liq
tanishib chiqishingiz mumkin.
