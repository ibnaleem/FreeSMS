import subprocess
import os

current_directory = os.path.dirname(os.path.abspath(__file__))

web_directory = os.path.join(current_directory, "cmd")

while True:
    try:
        subprocess.run(["python", "-m", "http.server"], cwd=web_directory, check=True)
        print("FreeSMS WebGUI running @ http://localhost:8000")
    except subprocess.CalledProcessError as e:
        print("Error:", e)
