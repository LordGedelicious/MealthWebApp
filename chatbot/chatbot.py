import numpy as np
from difflib import SequenceMatcher
import pandas as pd
import os

def extractQuery(query):
    # Buat dua buah array of array
    # Array of array pertama berisikan [id, text dasar]. Simpan dengan nama idAndQuery
    # Array of array kedua berisikan [id_origin, nextQuery, id_target]. Simpan dengan nama linkedListQuery
    idAndQuery = []
    linkedListQuery = []
    for idx in query.index:
        idAndQuery.append([query['id'][idx], query['text'][idx]])
        for i in range(0, query['numChoice'][idx]):
            queryTarget = "query" + str(i+1)
            referTarget = "refer" + str(i+1)
            linkedListQuery.append([query['id'][idx], query[queryTarget][idx], int(query[referTarget][idx])])
    return idAndQuery, linkedListQuery

def whereIsNextChat(userQuery, linkedListQuery):
    for i in linkedListQuery:
        if i[1] == userQuery:
            return True, i[2]
    # else
    return False, -999

def returnChat(listQuery, id):
    for i in listQuery:
        if i[0] == id:
            print(i[1])

def isItAQuestion(id, query):
    if query['numChoice'][id] == 0:
        return False 

def main():
    pathDirectory = os.path.abspath(os.path.join(os.path.dirname( __file__ )))
    pathFile = os.path.join(pathDirectory, 'query.csv')
    query = pd.read_csv(pathFile)
    idAndQuery, linkedListQuery = extractQuery(query)
    hasChatStarted = False
    hasChatEnded = False
    queryOrder = [0]
    while not hasChatEnded:
        if not hasChatStarted:
            print("Ujicoba chatbot Melly, ketik \"exit\" untuk mengakhiri program")
            hasChatStarted = True
        if hasChatStarted:
            returnChat(idAndQuery, queryOrder[-1]) # Ini buat respon default, regardless ada kelanjutan bubble atau engga
            userQuery = input("Masukkan query: ")
            isNextChat, nextQuery = whereIsNextChat(userQuery, linkedListQuery)
            if userQuery == "exit":
                hasChatEnded = True
            elif isNextChat:
                queryOrder.append(nextQuery)
            else:
                print("Maaf, saya tidak mengerti")
    print("Ujicoba selesai!")


main()

