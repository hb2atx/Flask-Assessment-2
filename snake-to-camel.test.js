describe("#snakeToCamel", () => {
  it("passes_standard_cases", function() {
    expect(snakeToCamel("awesome_sauce")).toBe("awesomeSauce");
    expect(snakeToCamel("a_man_a_plan")).toBe("aManAPlan");
    expect(snakeToCamel("HOW_ABOUT_NOW?")).toBe("HOWABOUTNOW?");
  });
});

console.log(snakeToCamel("awesome_sauce")); 
console.log(snakeToCamel("a_man_a_plan"));  
console.log(snakeToCamel("HOW_ABOUT_NOW?"));  