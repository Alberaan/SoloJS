#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import json

def get_ficheros(carpeta):
    ficheros = os.listdir(carpeta)
    data = [] 

    for fichero in ficheros:
        if fichero != "index.txt":
            data.append({"nombre" : fichero, "contenido" : get_contenido(os.path.join(carpeta, fichero))})

    return data

def get_contenido(fichero):
    f = open(fichero, errors="ignore", encoding="utf-8")
    stringToReturn = f.read()
    stringToReturn.replace("\n", "\\n")
    return stringToReturn

def get_directorios(root):
    directories = os.listdir(root)
    data = {"sistemas": []}

    for directory in directories:
        if directory != "index.txt":
            newSistema = {"nombre" : directory, "ficheros": get_ficheros(os.path.join(root, directory))}
            data["sistemas"].append(newSistema)

    json_data = json.dumps(data)
    json_data_no_carriage = json_data.replace("\\", "\\\\")
    json_data_return = json_data_no_carriage.replace("\'", "\\\'")

    print("jsonDatos = '" + json_data_return + "'")


get_directorios("Tablas")
