import React from "react";

class DietDatabase extends Component {
  render() {
    return (
      <div>
        <table className="meal-table" style="width: 100%">
          <tr>
            <th>Total Protein (g)</th>
            <th>Total Calories (Kcal)</th>
            <th>Total Cost (£)</th>
          </tr>
          <tr>
            <td>
              <input name="totalProtein" type="number" step="0.1" />
            </td>
            <td>
              <input name="totalCalories" type="number" step="0.1" />
            </td>
            <td>
              <input name="totalCost" type="number" step="0.1" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DietDatabase;
