# Create application

Djangoda turli xil proyektlar qilish mumkin. Oddiydan to murakkab ko'rinishgacha. Barcha kodni bitta faylga yozish esa
keyinchalik unga o'zgartirish yoki kerak kodni topib olishda qiyinchilik tug'dirishi mumkin. Shuning uchun djangoda
ish muhitini osonlashtirish uchun application degan atama bor. Application orqali siz proyektni bir necha mantiqiy
qismlarga ajratib, ishlash muhitingizni ancha qulay qililb olishingiz mumkin.

Application yaratib olish uchun proyektimizni editorda ochib olamiz va terminalda quyidagi komandani teramiz.

```bash
./manage.py startapp product
```
Yuqoridagi komanda orqali `product` nomli application yaratildi va u `config` papkasi bilan yonma-yon turadi.

```text {2}
config/
product/
manage.py
```

Proyektimizda endi product nomli application bor. Endi uni proyektimizda ro'yxatdan o'tkazib qo'yishimiz kerak.
Buning uchun `config/setting.py` faylini ochamiz.

**`config/setting.py`**
```python 
...

INSTALLED_APPS = [
    ...,
    
    'product'
]
```

Shu bilan `product` application proyektimizda ro'yxatdan o'tkazildi.
