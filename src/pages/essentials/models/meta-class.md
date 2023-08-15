# Meta class

Modelni sozlash uchun biz djangodagi `Meta` klassidan foydalanamiz.

Masalan:

```python {8-9}
from django.db import models

class Mahsulot(models.Model):
    nomi = models.CharField(max_length=50)
    narxi = models.IntegerField()
    tavsifi = models.TextField()
    
    class Meta:
        ordering = ['narxi']
```

`ordering` atributi bazadan mahsulotlar ro'yxati olinganda ularni `narxi` fieldi bo'yicha tartiblab qaytaradi.

`Meta` klassining boshqa atributlari haqida ma'lumotni [bu yerda](../../api-reference/model-meta-options/index.md)
topishingiz mumkin.
