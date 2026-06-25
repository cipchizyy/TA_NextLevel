from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def landing():
    return render_template("landing.html")


@app.route("/login")
def login():
    return render_template("auth/login.html")


@app.route("/signup")
def signup():
    return render_template("auth/signup.html")


@app.route("/rooms")
def rooms():
    return "Halaman Choose Room nanti dibuat setelah login/signup selesai."


@app.route("/reservations")
def reservations():
    return "Halaman Reservation nanti dibuat setelah login/signup selesai."


@app.route("/admin")
def admin():
    return "Halaman Admin nanti dibuat setelah login/signup selesai."


if __name__ == "__main__":
    app.run(debug=True)