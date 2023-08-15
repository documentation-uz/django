# First model

Djangoda ma'lumotlarni bazaga yozish uchun model degan mavzuga murojaat qilamiz. Biror bir ma'lumotni bazaga saqlash
uchun uning modelini tuzib olamiz va uni migratsiya qilamiz. Ma'lumotga esa tasavvur qilishga oson bo'lishi uchun
jadval ko'rinishida misol keltiraman. Masalan mahsulotlar bor va ular uchun biz Product modelini tuzib olishimiz kerak.
Uning jadval ko'rinishi:

|  id  |   name    |   color   |  price  |
|:----:|:---------:|:---------:|:-------:|
|  1   | iPhone 14 |  kulrang  | 7000000 |
|  2   |   olma    |   qizil   |  24000  |
|  3   |  ruchka   |   ko'k    |  3000   |
|  4   |   stul    | jigarrang | 250000  |

Har bir qator bitta obyekt hisoblanadi.

Bu jadvalning modeli quyidagicha bo'ladi va uni `product/models.py` fayliga yozamiz.

**`product/models.py`**
```python
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
```

`Product` - modelning nomi. Jadvalda ustunlarning nomi `Product` modelining fieldlari sifatida yozildi. Faqat `id`
ustuni yozilmadi. Sababi django `id` fieldini avtomatik ravishda o'zi qo'shadi.

Endi bu modelni bazaga migratsiya qilish uchun avval migratsiya fayllarini generatsiya qilib olishimiz kerak. Buning
uchun terminalda quyidagi komandani teramiz.

```bash
./manage.py makemigrations
```

`product/migrations/` papkasining ichidagi yangi fayl paydo bo'ladi va uning ichida migratsiya qilish kodlari yozilgan.

Ana endi migratsiya qilish komandasini terib modelimizni bazada ro'yxatdan o'tkazamiz.

```bash
./manage.py migrate
```

Modelimiz bazada ro'yxatdan o'tkazildi.

::: tip Yodda tuting
Har safar yangi model tuzilganda yoki modelga o'zgartirish kiritilganda xuddi shu amallarni bajarib, yangilanishlar
bazada ro'yxatdan o'tkaziladi.
:::
