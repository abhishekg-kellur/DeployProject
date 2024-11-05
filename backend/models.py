from sqlmodel import Field, Session, SQLModel, create_engine, select
from typing import Union

class Item(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    name: str
    description: str = None
    price: float
    quantity: int