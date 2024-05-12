# -*- coding: utf-8 -*-
"""
Created on Sun May 12 22:55:24 2024

@author: SAMI
"""
import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from joblib import dump,load

# Reading Data #
df = pd.read_csv('./house_data_final')

# feature and target split #
X = df.drop('Price' , axis=1)
y = df['Price']

model = LinearRegression()
model.fit(X, y)

# Serializing Model #
dump(model , "house_prediction_model.joblib")