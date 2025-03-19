module.exports = {
    apps: [
        {
            name: "app",
            script: "server.js", // หรือไฟล์ main ของโปรเจกต์
            instances: "max", // ใช้ CPU ทุก core
            exec_mode: "cluster", // รันหลาย instance
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
