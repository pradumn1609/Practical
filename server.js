// Practical Exam

// Problem 2: Express Middleware + Route Protection
// Task:
// Build an Express app with:
// ● A custom middleware authMiddleware
// ● Middleware should allow access only if request header contains:
// Authorization: admin123
// Routes:
// ● /public → accessible to everyone
// ● /private → protected route (use middleware)
// Expected Output:
// ● Unauthorized → 403 Access Denied
// ● Authorized → Welcome to private route

const express=require('express');
const app=express();
const PORT=3000;

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader==="admin123"){
        next();
    }
    else{
        res.status(403).send("403 Access denied");
    }
};

app.get("/public",(req,res)=>{
    res.send("Welcome to public route");
});

app.get("/private",authMiddleware,(req,res)=>{
    res.send("Welcome to private route");
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${3000}`)
});




