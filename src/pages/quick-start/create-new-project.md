# Create new project

Djangoda ishni yangi proyekt ochishdan boshlaymiz. Buning uchun quyidagi qadamlarni bajaramiz.

* Proyekt uchun papka ochib olamiz. Papkani odatda `Documents` ichidan ochiladi, lekin siz istalgan papkaning ichiga
  ochishingiz mumkin.

```bash
mkdir onlineShop 
```

* proyektimiz uchun `onlineShop` papkasini ochdik. Endi uning ichiga kiramiz.

```bash
cd onlineShop
```

* proyekt uchun `virtual environment` yaratib olamiz.

```bash
python3 -m venv venv
```

yoki

```bash
python -m venv venv
```

* `virtual environment`ni aktivatsiya qilib olamiz.

```bash
. venv/bin/activate
```

* `django`ni o'rnatib olamiz.

```bash
pip install django
```

* ana endi `django`da proyekt yaratamiz.

```bash
django-admin startproject config .
```

Shunday qilib, proyektimiz `onlineShop` papkasining ichida turadi va proyekt bilan ishlash uchun istalgan editorda
`onlineShop` papkasini ochib ishlashimiz mumkin. Editor sifatida Pycharm, VS Code, Sublime Text va boshqalardan
foydalanishingiz mumkin.

:::tip Maslahat
Editor sifatida Pycharm Professional Editionni ishlatishni maslahat beraman. Boshqa editorlar bilan solishtirganda
bu editor aynan python va uning framevorklari bilan ishlash uchun ishlab chiqilgan.
:::

Proyektni ishga tushirish har doim proyekt papkasining ichiga kirib, virtual environmentni aktivatsiya qilib, quyidagi
komandani teramiz.

```bash
./manage.py runserver
```

Ishga tushgan proyektni o'chirib qo'yish uchun `Ctrl+C` ni bosamiz.
