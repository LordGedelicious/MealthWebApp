import numpy as np
from difflib import SequenceMatcher
import pandas as pd
import os
import codecs

def extractQuery(query):
    # Buat dua buah array of array
    # Array of array pertama berisikan [id, text dasar]. Simpan dengan nama idAndQuery
    # Array of array kedua berisikan [id_origin, nextQuery, id_target]. Simpan dengan nama linkedListQuery
    idAndQuery = []
    linkedListQuery = []
    for idx in query.index:
        idAndQuery.append([query['id'][idx], query['text'][idx], query['numChoice'][idx]])
        for i in range(0, query['numChoice'][idx]):
            queryTarget = "query" + str(i+1)
            referTarget = "refer" + str(i+1)
            linkedListQuery.append([query['id'][idx], query[queryTarget][idx], int(query[referTarget][idx])])
    return idAndQuery, linkedListQuery

def whereIsNextChat(userQuery, linkedListQuery, currentChatIdx):
    for i in linkedListQuery:
        if i[1] == userQuery and i[0] == currentChatIdx:
            return True, i[2]
    # else
    return False, -999

def returnChat(listQuery, id):
    for i in listQuery:
        if i[0] == id:
            print(codecs.decode(i[1], 'unicode_escape'))

def currentChatIndex(userQueryId, idAndQuery):
    for i in idAndQuery:
        if i[0] == userQueryId:
            return idAndQuery.index(i)

def isItAQuestion(id, query):
    rowEntry = query.loc[query['id'] == id]
    if rowEntry['numChoice'].iloc[0] == 0:
        return False
    else:
        return True

def main():
    pathDirectory = os.path.abspath(os.path.join(os.path.dirname( __file__ )))
    pathFile = os.path.join(pathDirectory, 'query.csv')
    query = pd.read_csv(pathFile)
    idAndQuery, linkedListQuery = extractQuery(query)
    hasChatStarted = False
    hasChatEnded = False
    queryOrder = [-1]
    while not hasChatEnded:
        if not hasChatStarted:
            print("Ujicoba chatbot Melly, ketik \"exit\" untuk mengakhiri program")
            hasChatStarted = True
        if hasChatStarted:
            returnChat(idAndQuery, queryOrder[-1]) # Ini buat respon default, regardless ada kelanjutan bubble atau engga
            if isItAQuestion(queryOrder[-1], query):
                returnChat(linkedListQuery, queryOrder[-1]) # Ini buat respon pertanyaan
            userQuery = input("Masukkan query: ")
            isNextChat, nextQuery = whereIsNextChat(userQuery, linkedListQuery, queryOrder[-1])
            if userQuery == "exit":
                hasChatEnded = True
            elif userQuery == "kembali":
                if len(queryOrder) > 1:
                    queryOrder.pop(-1)
            elif isNextChat:
                queryOrder.append(nextQuery)
            else:
                print("Maaf, saya tidak mengerti\n")
    print("Ujicoba selesai!")


main()

