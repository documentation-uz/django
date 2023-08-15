# Relationships

Ma'lumotlarni bazaga saqlaganda modellar bir-biriga bog'lanishi mumkin.

## Birga ko'p bog'lanish

Masalan mahsulot qaysi kategoriyaga tegishli ekanligi haqida ma'lumotni saqlash uchun mahsulot modeli kategoriya
modeliga bog'lanadi.

```python {7}
from django.db import models

class Kategoriya(models.Model):
    nomi = models.CharField(max_length=50)
    
class Mahsulot(models.Model):
    kategoriya = models.ForeignKey(Kategoriya, on_delete=models.RESTRICT)
    nomi = models.CharField(max_length=50)
    narxi = models.IntegerField()
    tavsifi = models.TextField()
```

`Mahsulot` modeli `kategoriya` fieldi orqali `Kategoriya` modeliga bog'landi.

Bu bog'lanish birga ko'p bog'lanish deyiladi va bunday usulda bog'lash uchun `ForeignKey`dan foydalaniladi.

Birga ko'p bog'lanish deb bitta obyektga bir nechta obyekt bog'lanishiga aytiladi.

Masalan, meva nomli kategoriyaga olma, nok, banan, olcha kabi mahsulotlar bog'lanishi mumkin.

## Ko'pga ko'p bog'lanish

Yuqoridagi birga ko'p bog'lanishda olma, nok, banan, olcha faqat meva kategoriyasiga bog'lanishi mumkin.

Ko'pga ko'p bog'lanish holatida esa boshqacha bo'ladi. Masalan universitetdagi domla va talabalarni olaylik.

Bitta domlaga bir nechta talaba darsga kiradi. Lekin talaba ham o'z vaqtida bir nechta domlaga darsga kiradi.

Ya'ni bitta domlaga bir nechta talaba to'g'ri kelsa, bitta talabaga ham bir nechta talaba to'g'ri keladi.

Buning modeli djangoda:

```python {10}
from django.db import models

class Talaba(models.Model):
    ismi = models.CharField(max_length=40)
    familiyasi = models.CharField(max_length=40)

class Domla(models.Model):
    ismi = models.CharField(max_length=40)
    familiyasi = models.CharField(max_length=40)
    talabalari = models.ManyToManyField(Talaba)
```

::: tip
`ManyToManyField` ko'pga ko'p bog'lanish holatida ishlatiladi.
:::

## Birga bir bog'lanish

Bunga quyidagicha misol keltirish mumkin. Bitta pasport faqat bitta odamga tegishli bo'lishi mumkin va shu bilan birga
bitta odamda faqat bitta pasport bo'lishi mumkin. Bu holat birga bir bog'lanish deyiladi.

```python {9}
from django.db import models

class Odam(models.Model):
    ismi = models.CharField(max_length=40)
    familiyasi = models.CharField(max_length=40)
    yoshi = models.IntegerField()
    
class Pasport(models.Model):
    odam = models.OneToOneField(Odam, on_delete=models.RESTRICT)
    seriyasi = models.CharField(max_length=20)
    olingan_sana = models.DateField()
```
