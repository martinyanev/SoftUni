function figArea(w, h, w1, h1) {
    let [s1, s2, s3] = [w*h, w1*h1, Math.min(w, w1) * Math.min(h, h1)];
    return s1 + s2 - s3;
}