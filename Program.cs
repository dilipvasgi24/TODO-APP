using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using TaskManagement;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<StorageData>();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
