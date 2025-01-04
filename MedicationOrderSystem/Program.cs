var builder = WebApplication.CreateBuilder(args);

// Add CustomSettings.json configuration
builder.Configuration.AddJsonFile("CustomSettings.json", optional: false, reloadOnChange: true);

builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Order/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Order}/{action=Index}/{id?}");

app.Run();
