import os
import sys
import argparse
import json
from sklearn.decomposition import PCA
import pickle as pk
from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_cors import CORS, cross_origin

# Set environment python path for pytorch_transformers
os.environ["PYTHONPATH"] = "${PYTHONPATH}:/workspace/code"
# os.environ["GPU_ID"]="0"
# Add path to run_latent_generation
latent_gen_path = os.path.join(os.getcwd(), "code/examples/big_ae/")
sys.path.append(latent_gen_path)
# Add path to pytorch_transformers
torch_trans_path = os.path.join(os.getcwd(), "code/")
sys.path.append(torch_trans_path)
import torch
import numpy as np
import random

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
app.debug=True
# app = Flask(__name__)
CORS(app)

@app.route("/", defaults={'path':''})
@cross_origin()
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

if __name__ == "__main__":
    app.run( port=5001)