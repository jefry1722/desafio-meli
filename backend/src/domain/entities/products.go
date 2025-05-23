package entities

type Product struct {
	ID           string   `json:"id"`
	Title        string   `json:"title"`
	Condition    string   `json:"condition"`
	Category     string   `json:"category"`
	Description  string   `json:"description"`
	IsMostSelled bool     `json:"isMostSelled"`
	Logo         string   `json:"logo"`
	Banner       string   `json:"banner"`
	Currency     string   `json:"currency"`
	Prices       Prices   `json:"prices"`
	SoldQuantity int      `json:"soldQuantity"`
	Discount     int      `json:"discount"`
	Reviews      []Review `json:"reviews"`
	Stock        int      `json:"stock"`
	Colors       []Color  `json:"colors"`
	Seller       Seller   `json:"seller"`
	Features     []string `json:"features"`
}

type Prices struct {
	RealPrice float64 `json:"realPrice"`
	SubTotal  float64 `json:"subTotal"`
}

type Review struct {
	ID      string  `json:"id"`
	Rating  float64 `json:"rating"`
	Comment string  `json:"comment"`
}

type Color struct {
	Value  string  `json:"value"`
	Icon   string  `json:"icon"`
	Images []Image `json:"images"`
}

type Image struct {
	Name string `json:"name"`
	URL  string `json:"url"`
}

type Seller struct {
	Name           string       `json:"name"`
	Rating         string       `json:"rating"`
	IsVerified     bool         `json:"isVerified"`
	Images         SellerImages `json:"images"`
	Description    string       `json:"description"`
	ProductsAmount int          `json:"productsAmount"`
}

type SellerImages struct {
	Banner  string `json:"banner"`
	Profile string `json:"profile"`
}
